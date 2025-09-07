import React, { useState, useEffect } from "react";
import Tables from "./components/Tables";
import TableLoading from "./components/TableLoading";
import NoRecord from "./components/NoRecord";
import { ConfigProvider, Pagination } from "antd";
import { useAxiosWithToken } from "@/hooks";
import { objectToQueryString } from "@/helper";


// ─── Life Cycle ─────────────────────────────────────────────────────────────────

// ─── Functions ──────────────────────────────────────────────────────────────────
function Index({ cols, api, apiDel, pageSize, queries, actions, reload, setRowData, setTotalCount }) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [total, setTotal] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const getList = (myCurrentPage = 1) => {
    setLoading(true);
    useAxiosWithToken
      .get(api + `?pageNo=${myCurrentPage - 1}&pageSize=${pageSize ? pageSize : 10}${queries ? "&" + objectToQueryString(queries) : ""}`)
      .then((res) => {
        if (myCurrentPage === 1) {
          setCurrentPage(1);
        }
        if (res.data.elements === null && myCurrentPage > 1) {
          setCurrentPage(1);
        }
        setLoading(false);
        setData(res?.data);
        setTotal(res.data?.totalElements);
        if (setTotalCount) {
          setTotalCount(res.data?.totalElements);
        }
      })
      .catch((error) => {
        setData([]);
        setTotal(0);
        setLoading(false);
      });
  };
  useEffect(() => {
    getList(currentPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, reload]);
  useEffect(() => {
    if (queries) {
      getList();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queries]);

  return (
    <section className="w-full min-h-[600px] h-auto mt-2">
      {loading ? (
        <TableLoading />
      ) : total ? (
        <section className="">
          <section className="w-full overflow-x-auto">
            <Tables setRowData={setRowData} apiDel={apiDel} data={data} cols={cols} getList={() => getList(currentPage)} actions={actions} />
          </section>
          <section className="w-full grid grid-cols-1 xl:grid-cols-3 items-center">
            <section className="flex items-center mt-4 gap-2">
              <span className="text-sm block">{`تعداد کل رکوردها:`}</span>
              <span className="font-extrabold">{total}</span>
            </section>
            <section className="flex justify-center">
              {data.elements?.length > 0 && (
                <ConfigProvider
                  theme={{
                    token: {
                      colorPrimary: "#D82B36",
                    },
                  }}
                >
                  <Pagination className="ltr sans mt-5 text-center border-red" defaultCurrent={1} showSizeChanger={false} current={currentPage} pageSize={pageSize} onChange={(value) => setCurrentPage(value)} total={total} rootClassName="dark:text-white border-red" />
                </ConfigProvider>
              )}
            </section>
          </section>
        </section>
      ) : total === 0 && loading === false ? (
        <NoRecord />
      ) : (
        <></>
      )}
    </section>
  );
}

export default React.memo(Index);
