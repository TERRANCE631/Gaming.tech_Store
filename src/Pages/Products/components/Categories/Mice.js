import { ProductCard } from '../ProductCard';
import { useFecthCategory } from '../../../../Hooks/useFecthCategory';
import { Filter } from '../FilterCategory/Filter';

export function Mice({ apiPath }) {
    const { categories, Loading } = useFecthCategory(apiPath)

    return (
        <section>
            <h1 className="text-2xl font_style">Mice ( {categories.length} )</h1>

            <Filter />
            {Loading && <p className="text-2xl text-center mt-[10%]">Loading items...</p>}

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {categories.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

        </section>
    );
}