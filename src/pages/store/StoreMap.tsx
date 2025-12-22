import { useEffect, useRef } from "react";
import type { Store } from "../../types/Store";

type Props = {
    stores: Store[];
};

const StoreMap = ({ stores }: Props) => {
    const mapRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!mapRef.current) return;

        console.log("StoreMap mounted", stores);
    }, [stores]);

    return (
        <div
            ref={mapRef}
            style={{ width: "100%", height: 500 }}
            className="border rounded"
        />
    );
};

export default StoreMap;
