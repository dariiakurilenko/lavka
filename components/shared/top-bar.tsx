import { cn } from "@/lib/utils";
import React from "react";
import { Container } from "./container";
import { SortPopup } from "./sort-popup";
import { Categories } from "./categories";

interface Props {
    className?: string;
}

export const TopBar: React.FC<Props> = ({ className }) => {
    return (
        <div className={cn('sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10', className)}>
            <Container className="flex items-center justify-between">
                <Categories />
                <SortPopup />
            </Container>
        </div>
    );
};