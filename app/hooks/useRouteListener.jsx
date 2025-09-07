'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export function useRouteListener() {
    const pathname = usePathname();
    const [routeStatus, setRouteStatus] = useState(0);

    useEffect(() => {
        /* console.log(`Route changed to: ${pathname}`); */
        setRouteStatus((prev) => prev + 1);
    }, [pathname]);

    return [routeStatus];
}
export default useRouteListener;