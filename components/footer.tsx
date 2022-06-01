import Link from "next/link";

const Footer: React.FC = () => {
  return (
    // <div className="h-full sm:h-[40vh] py-14 px-10 sm:px-36 border-t-[1px] border-black ">
    <div className="h-full sm:h-[40vh] py-14 px-10 sm:px-36 bg-black text-white ">

      <div className="h-full w-full grid grid-cols-1 grid-rows-4 sm:grid-cols-[1.5fr,1fr,1fr,1fr] sm:grid-rows-1 ">
        <div className="flex flex-col mx-0 sm:mr-20">
          <p className="font-semibold text-3xl">Sign up for our newsletter</p>
          <p className="text-sm my-4">
            Be the first to know about our special offers, new product launches,
            and events
          </p>

          <input
            placeholder="Email"
            type="text"
            className="w-full px-3 border-[1px] border-black"
          />
        </div>

        <div className="ml-0 sm:ml-5 ">
          <p className="font-bold mb-8">Shop</p>

          <ul className="flex flex-col">
            <li className="text-sm font-regular text-slate-600">
              <Link href="/shop/cpu">
                <a>CPU</a>
              </Link>
            </li>
            <li className="text-sm font-regular text-slate-600">
              <Link href="/shop/cpu">
                <a>Motherboard</a>
              </Link>
            </li>
            <li className="text-sm font-regular text-slate-600">
              <Link href="/shop/cpu">
                <a>Graphics Card</a>
              </Link>
            </li>
            <li className="text-sm font-regular text-slate-600">
              <Link href="/shop/cpu">
                <a>PC Case</a>
              </Link>
            </li>
            <li className="text-sm font-regular text-slate-600">
              <Link href="/shop/cpu">
                <a>PSU</a>
              </Link>
            </li>
            <li className="text-sm font-regular text-slate-600">
              <Link href="/shop/cpu">
                <a>RAM</a>
              </Link>
            </li>
          </ul>
        </div>

        <div className="ml-0 sm:ml-5 ">
          <p className="font-bold mb-8">Help</p>

          <ul className="flex flex-col">
            <li className="text-sm font-regular text-slate-600">
              <Link href="/shop/cpu">
                <a>CPU</a>
              </Link>
            </li>
            <li className="text-sm font-regular text-slate-600">
              <Link href="/shop/cpu">
                <a>Motherboard</a>
              </Link>
            </li>
            <li className="text-sm font-regular text-slate-600">
              <Link href="/shop/cpu">
                <a>Graphics Card</a>
              </Link>
            </li>
            <li className="text-sm font-regular text-slate-600">
              <Link href="/shop/cpu">
                <a>PC Case</a>
              </Link>
            </li>
            <li className="text-sm font-regular text-slate-600">
              <Link href="/shop/cpu">
                <a>PSU</a>
              </Link>
            </li>
            <li className="text-sm font-regular text-slate-600">
              <Link href="/shop/cpu">
                <a>RAM</a>
              </Link>
            </li>
          </ul>
        </div>

        <div className="ml-0 mt-5 sm:ml-5 sm:mt-0 ">
          <p className="font-bold mb-8">About Us</p>

          <ul className="flex flex-col">
            <li className="text-sm font-regular text-slate-600">
              <Link href="/shop/cpu">
                <a>CPU</a>
              </Link>
            </li>
            <li className="text-sm font-regular text-slate-600">
              <Link href="/shop/cpu">
                <a>Motherboard</a>
              </Link>
            </li>
            <li className="text-sm font-regular text-slate-600">
              <Link href="/shop/cpu">
                <a>Graphics Card</a>
              </Link>
            </li>
            <li className="text-sm font-regular text-slate-600">
              <Link href="/shop/cpu">
                <a>PC Case</a>
              </Link>
            </li>
            <li className="text-sm font-regular text-slate-600">
              <Link href="/shop/cpu">
                <a>PSU</a>
              </Link>
            </li>
            <li className="text-sm font-regular text-slate-600">
              <Link href="/shop/cpu">
                <a>RAM</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
