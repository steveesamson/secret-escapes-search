import React from "react";
import { useParams } from "react-router-dom";
import { useSale } from "../hooks";
import { PageError, PageLoader } from "../components/common";
import SearchDetail from "../components/details/SearchDetail";

const Sale = () => {
    const { saleId } = useParams();
    const { loading, error, data } = useSale(saleId ?? "");

    if (loading) {
        return <PageLoader />;
    }
    if (error) {
        return <PageError message={error?.message} />;
    }
    const { sale } = data;


    if (!sale) {
        return <PageError message={`404: Sales with id '${saleId}' was not found.`} />;
    }

    return <SearchDetail sale={sale} />;
}

export default Sale;