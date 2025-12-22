import { useEffect, useRef } from "react";
import type { Store } from "../../types/Store";

type Props = {
    storeList: Store[];
};

const StoreMap = (props: Props) => {
    const mapRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        console.log("StoreMap mounted", props.storeList);
    }, [props.storeList]);

    return (
        <div
            ref={mapRef}
            className="store-map border rounded"
            style={{ width: "100%", height: 500 }}
        />
    );
};
export default StoreMap;
