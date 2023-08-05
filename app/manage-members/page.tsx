import Image from "next/image";

export default function ManageUsersPage() {
  const products = [
    {
      id: 1,
      name: "Basic Tee",
      href: "https://res.cloudinary.com/ddqg1mfyq/image/upload/v1690597894/hyfe3pjsmxqvs7twrdew.jpg",
      imageSrc:
        "https://res.cloudinary.com/ddqg1mfyq/image/upload/v1690597894/hyfe3pjsmxqvs7twrdew.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Black",
    },
    {
      id: 2,
      name: "Basic Tee",
      href: "https://res.cloudinary.com/ddqg1mfyq/image/upload/v1690597894/malyfl6huvnlwx9vsoqe.jpg",
      imageSrc:
        "https://res.cloudinary.com/ddqg1mfyq/image/upload/v1690597894/malyfl6huvnlwx9vsoqe.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Black",
    },
    {
      id: 3,
      name: "Basic Tee",
      href: "https://res.cloudinary.com/ddqg1mfyq/image/upload/c_scale,w_1280/v1690599172/ffkfki49drr15iks5qby.jpg",
      imageSrc:
        "https://res.cloudinary.com/ddqg1mfyq/image/upload/c_scale,w_1280/v1690599172/ffkfki49drr15iks5qby.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Black",
    },
    {
      id: 4,
      name: "Basic Tee",
      href: "https://utfs.io/f/c703cd35-051b-4460-bd7a-5ffe8744d7f3_07.jpg",
      imageSrc: "https://utfs.io/f/c703cd35-051b-4460-bd7a-5ffe8744d7f3_07.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Black",
    },
    {
      id: 5,
      name: "Basic Tee",
      href: "https://utfs.io/f/35dc5352-fbdf-4702-9600-294ab43b1cc3_06.jpg",
      imageSrc: "https://utfs.io/f/35dc5352-fbdf-4702-9600-294ab43b1cc3_06.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Black",
    },
    {
      id: 6,
      name: "Basic Tee",
      href: "https://utfs.io/f/42bfef8f-84ca-406a-a0a8-7dff46676c6c_08.jpg",
      imageSrc: "https://utfs.io/f/42bfef8f-84ca-406a-a0a8-7dff46676c6c_08.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Black",
    },
    {
      id: 7,
      name: "Basic Tee",
      href: "https://utfs.io/f/e1c5013a-2756-44e1-bfae-20c482bfc10a_09.jpg",
      imageSrc: "https://utfs.io/f/e1c5013a-2756-44e1-bfae-20c482bfc10a_09.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Black",
    },
    {
      id: 8,
      name: "Basic Tee",
      href: "https://utfs.io/f/06190c5f-ca71-47d2-a0f6-e2ed451563c0_10.jpg",
      imageSrc: "https://utfs.io/f/06190c5f-ca71-47d2-a0f6-e2ed451563c0_10.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Black",
    },
    // More products...
  ];
  return (
    <>
      <div className=" pb-3">
        <p className=" text-lg text-gray-900 ">จัดการสมาชิก</p>
      </div>

      <div className="relative overflow-x-auto rounded-md  sm:rounded-md ">
        <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}

                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
