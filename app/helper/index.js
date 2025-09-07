import toast from "react-hot-toast";
import Moment from "moment-jalaali";
import moment from "moment-jalaali";
import CryptoJS from "crypto-js";

export const isValue = (value) => {
  if (value === null || value === "" || value === undefined) {
    return false;
  } else {
    return true;
  }
};
export const isObjEmpty = (obj) => {
  return Object.keys(obj).length === 0;
};
export const generateOptions = (data, optionValue, optionLabel) => {
  let arr = [];
  data?.forEach((item) => {
    arr.push({ value: item[optionValue], label: item[optionLabel] });
  });
  return arr;
};
export const numberWithCommas = (num) => {
  if (isValue(num)) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  } else {
    return num;
  }
};

export const notify = {
  Success: (text) =>
    toast.success(text, {
      style: {
        border: "1px solid #1CAE81",
        padding: "16px",
        color: "black",
        backgroundColor: "#DDF3EC",
      },
      iconTheme: {
        primary: "#1CAE81",
        secondary: "#FFFAEE",
      },
    }),
  Error: (text) =>
    toast.error(text, {
      style: {
        border: "1px solid red",
        padding: "16px",
        color: "black",
        backgroundColor: "#ffc7c7",
      },
      iconTheme: {
        primary: "red",
        secondary: "#ffc7c7",
      },
    }),
};
export const scrollToTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
};
export const consoleLog_Blue = (value, title) => {
  let logTitle;
  if (title) {
    logTitle = title;
  } else {
    logTitle = "Blue Title";
  }
  console.log(`%c <--//////////// ${logTitle} ///////////////////-->`, "background: #0096FF; color: white");
  console.log(value);
};
export const consoleLog_Red = (value, title) => {
  let logTitle;
  if (title) {
    logTitle = title;
  } else {
    logTitle = "Red Title";
  }
  console.log(`%c <--//////////// ${logTitle} ///////////////////-->`, "background: #EB4747; color: white");
  console.log(value);
};
export const consoleLog_yellow = (value, title) => {
  let logTitle;
  if (title) {
    logTitle = title;
  } else {
    logTitle = "yellow Title";
  }
  console.log(`%c <--//////////// ${logTitle} ///////////////////-->`, "background: yellow; color: black");
  console.log(value);
};
export const consoleLog_green = (value, title) => {
  let logTitle;
  if (title) {
    logTitle = title;
  } else {
    logTitle = "Green Title";
  }
  console.log(`%c <--//////////// ${logTitle} ///////////////////-->`, "background: #34BE82; color: white");
  console.log(value);
};
export const consoleLog_BlackGreen = (value, title) => {
  let logTitle;
  if (title) {
    logTitle = title;
  } else {
    logTitle = "Black Green Title";
  }
  console.log(`%c <--//////////// ${logTitle} ///////////////////-->`, "background: black; color: #80ff00");
  console.log(value);
};
export const consoleLog_BlackOrange = (value, title) => {
  let logTitle;
  if (title) {
    logTitle = title;
  } else {
    logTitle = "Black Orange Title";
  }
  console.log(`%c <--//////////// ${logTitle} ///////////////////-->`, "background: black; color: #ff8000");
  console.log(value);
};
export const consoleLog_BlackYellow = (value, title) => {
  let logTitle;
  if (title) {
    logTitle = title;
  } else {
    logTitle = "Black yellow Title";
  }
  console.log(`%c <--//////////// ${logTitle} ///////////////////-->`, "background: black; color: yellow");
  console.log(value);
};
export const consoleLog_BlackRed = (value, title) => {
  let logTitle;
  if (title) {
    logTitle = title;
  } else {
    logTitle = "Black Red Title";
  }
  console.log(`%c <--//////////// ${logTitle} ///////////////////-->`, "background: black; color: red");
  console.log(value);
};
export const consoleLog_Pink = (value, title) => {
  let logTitle;
  if (title) {
    logTitle = title;
  } else {
    logTitle = "Pink Title";
  }
  console.log(`%c <--//////////// ${logTitle} ///////////////////-->`, "background: pink; color: black");
  console.log(value);
};
export const consoleLog_Purple = (value, title) => {
  let logTitle;
  if (title) {
    logTitle = title;
  } else {
    logTitle = "Purple Title";
  }
  console.log(`%c <--//////////// ${logTitle} ///////////////////-->`, "background: Purple; color: white");
  console.log(value);
};
export const isEmptyObject = (obj) => {
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) return false;
  }
  return true;
};
export const getDayOfWeek = () => {
  const date = new Date();
  const daysOfWeek = ["یکشنبه", "دوشنبه", "سه شنبه", "چهارشنبه", "پنج شنبه", "جمعه", "شنبه"];
  return daysOfWeek[date.getDay()];
};
export const getPersianMonthText = (month) => {
  switch (month) {
    case 1:
      return "فروردین";
    case 2:
      return "اردیبهشت";
    case 3:
      return "خرداد";
    case 4:
      return "تیر";
    case 5:
      return "مرداد";
    case 6:
      return "شهریور";
    case 7:
      return "مهر";
    case 8:
      return "آبان";
    case 9:
      return "آذر";
    case 10:
      return "دی";
    case 11:
      return "بهمن";
    case 12:
      return "اسفند";
  }
};

export const getTodayPersian = () => {
  const day = Moment().format("jDD");
  const month = getPersianMonthText(parseInt(Moment().format("jM")));
  const dayOfWeek = getDayOfWeek();
  return `${dayOfWeek} ${day} ${month}`;
};
export const correctPersianDate = (value) => {
  let part1 = value.substring(0, 4);
  let part2 = value.substring(4, 6);
  let part3 = value.substring(6, 8);
  return part1 + "/" + part2 + "/" + part3;
};
export const removeFromArray = (arr, search) => {
  /*  const index = arr.indexOf(search);
  if (index > -1) {
    arr.splice(index, 1);
  } */
  arr = arr.filter((element) => element != search);
  return arr;
};
export const sumOfArray = (arr) => {
  const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  return sum;
};
export const persianToEnglishNumber = (input) => {
  if (typeof input !== "string") {
    throw new Error("Input must be a string");
  }

  const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  const englishDigits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  return input
    .split("")
    .map((char) => {
      const index = persianDigits.indexOf(char);
      return index !== -1 ? englishDigits[index] : char;
    })
    .join("");
};

export const jalaliToGregorian = (value) => {
  if (value) {
    const greDate = moment(persianToEnglishNumber(value), "jYYYY/jMM/jDD").format("YYYY-MM-DD");
    return greDate;
  }
  return "";
};

const secretKey = "ad682309412"; // کلید محرمانه (این کلید را در کدهای عمومی قرار ندهید)
export const encrypt = (role) => {
  return CryptoJS.AES.encrypt(role, secretKey).toString(); // رمزگذاری داده
};
export const decrypt = (encryptedRole) => {
  const bytes = CryptoJS.AES.decrypt(encryptedRole, secretKey); // رمزگشایی داده
  return bytes.toString(CryptoJS.enc.Utf8);
};

/* export const isDoctor = () => {
  let roles = decrypt(localStorage.getItem("ur")).split(",");
  if (roles.includes("doctor")) {
    return true;
  } else {
    return false;
  }
};
export const isCoach = () => {
  let roles = decrypt(localStorage.getItem("ur")).split(",");
  if (roles.includes("coach")) {
    return true;
  } else {
    return false;
  }
}; */
export const isAdmin = () => {
  let roles = decrypt(localStorage.getItem("ur")).split(",");
  if (roles.includes("client_admin")) {
    return true;
  } else {
    return false;
  }
};
export const isUser = () => {
  let roles = decrypt(localStorage.getItem("ur")).split(",");
  if (roles.includes("client_user")) {
    return true;
  } else {
    return false;
  }
};

export const objectToQueryString = (obj) => {
  const filteredObj = Object.fromEntries(Object.entries(obj).filter(([key, value]) => value !== null && value !== undefined && value !== ""));
  const params = new URLSearchParams(filteredObj);
  return params.toString();
};



export const getDatePickerDate = (data) => {
  return (`${data?.year}/${data?.month}/${data?.day}`)
}


export const generateArray = (start, end, step) => {
  return Array.from({ length: (end - start) / step + 1 }, (_, i) => {
    const value = start + i * step;
    return { label: numberWithCommas(value), value };
  });
};
export const cardNumberFormat = (value) => {
  return value.replace(/(\d{4})(?=\d)/g, '$1-');
}


export const removeCommasAndConvertToNumber = (str) => {
  if (str) {
    return Number(str.replace(/,/g, ''));
  }
  else {
    return str
  }

}