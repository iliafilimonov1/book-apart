
import React from "react";
import Card from "../ui/Card";
import { CardDetails } from "../ui/Card";
import { data } from "../../data/data";

const Cards: React.FC = () => {
    return (
        <section className="products">
            <div className="max-w-7xl mx-auto px-2">
                <h2 className="mb-4 text-4xl font-bold text-zinc-800">
                    Products Page
                </h2>
                <div className="flex flex-wrap gap-9 mb-6">
                    {data?.length > 0 &&
                        data?.map((product: CardDetails) => (
                            <Card
                                key={product?.id}
                                details={product}
                            />
                        ))}
                </div>
            </div>
        </section>
    );
};

Cards.displayName = 'Cards';

export default Cards;
