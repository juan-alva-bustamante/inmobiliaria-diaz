import React from 'react';

import './Products.module.scss';

const Products = () => {
  return (
    <div className="w-full h-full">
      <div className="w-full h-full flex justify-center items-center text-3xl pt-12">
        Nuestras casas en oferta:
      </div>
      <div className="w-screen h-screen justify-center items-center pr-96 pl-96">

        {[0, 0].map(() => (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-12">

            {
              [0, 0, 0, 0].map(() => (
                <div className="flex flex-col items-center justify-center bg-white p-4 shadow rounded-lg shadow-2xl">
                  <div className="inline-flex shadow-lg border border-gray-200 rounded-full overflow-hidden h-40 w-40">
                    <img
                      src="https://i.ebayimg.com/images/g/lt4AAOSwFGpgt-To/s-l400.jpg"
                      alt=""
                      className="h-full w-full"/>
                  </div>

                  <h2 className="mt-4 font-bold text-xl">Casa habitacional de lujo</h2>
                  <h6 className="mt-2 text-sm font-medium">Founder</h6>

                  <p className="text-xs text-gray-500 text-center mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab enim molestiae nulla.
                  </p>

                  <ul className="flex flex-row mt-4 space-x-2">
                    <li>
                      <a href=""
                         className="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800">
                        <i className="fab fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href=""
                         className="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href=""
                         className="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              ))
            }

          </div>
        ))}


      </div>
    </div>
  );
}

export default Products;
