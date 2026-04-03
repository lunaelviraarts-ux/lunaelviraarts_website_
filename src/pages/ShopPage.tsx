import { useEffect, useState } from 'react';
import { Filter } from 'lucide-react';
import { supabase, type Product } from '../lib/supabase';

export default function ShopPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  useEffect(() => {
    loadProducts();
  }, []);

  useEffect(() => {
    if (activeFilter === 'All') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter((p) => p.category === activeFilter));
    }
  }, [activeFilter, products]);

  async function loadProducts() {
    const { data } = await supabase
      .from('products')
      .select('*')
      .order('created_at', { ascending: false });

    if (data) {
      setProducts(data);
      setFilteredProducts(data);
    }
  }

  const filters = ['All', 'Cards', 'Prints', 'Personalised'];

  return (
    <div className="min-h-screen bg-stone-50">
      <div className="bg-gradient-to-br from-rose-50 to-amber-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-5xl md:text-6xl text-gray-900 mb-4">
            Shop Our Collection
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Browse our carefully crafted cards and prints, each one designed to celebrate
            life's special moments.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-64 lg:sticky lg:top-24 lg:self-start">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6 lg:block">
                <h2 className="font-serif text-2xl text-gray-900">Filter</h2>
                <button
                  onClick={() => setShowMobileFilters(!showMobileFilters)}
                  className="lg:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <Filter className="w-5 h-5" />
                </button>
              </div>

              <div className={`${showMobileFilters ? 'block' : 'hidden lg:block'} space-y-2`}>
                {filters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                      activeFilter === filter
                        ? 'bg-rose-400 text-white'
                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>

              <div className={`${showMobileFilters ? 'block' : 'hidden lg:block'} mt-8 pt-8 border-t border-gray-200`}>
                <p className="text-sm text-gray-600 leading-relaxed">
                  All our products are handmade to order using sustainable materials and
                  eco-friendly packaging.
                </p>
              </div>
            </div>
          </aside>

          <main className="flex-1">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-gray-600">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
              </p>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-gray-600 text-lg">No products found in this category yet.</p>
                <p className="text-gray-500 mt-2">Check back soon for new designs!</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                  >
                    <div className="aspect-square bg-gradient-to-br from-rose-100 to-amber-100 relative overflow-hidden">
                      <img
                        src={product.image_url}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <div className="mb-2">
                        <span className="text-xs font-medium text-rose-400 bg-rose-50 px-3 py-1 rounded-full">
                          {product.category}
                        </span>
                      </div>
                      <h3 className="font-serif text-xl text-gray-900 mb-2">{product.name}</h3>
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-2">
                        {product.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-medium text-gray-900">
                          £{product.price.toFixed(2)}
                        </span>
                        <button className="px-6 py-2 bg-rose-400 text-white text-sm font-medium rounded-full hover:bg-rose-500 transition-colors">
                          Add to basket
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
