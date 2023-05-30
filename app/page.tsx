import Card from "@/src/components/Card";
import Carousel from "@/src/components/Carousel";
import Order from "@/src/components/order";

export default function Home() {
	return (<>
		<div className="flex flex-col">
		<div className="w-1/3  mx-auto ">
			<Carousel/>
		</div>
<div className="hero min-h-screen">
  <div className="hero-content text-center grid grid-cols-1 md:grid-cols-3 gap-4">
<Card/><Card/>
				<Card/><Card/><Card/><Card/>
</div>
		<Order/>
		</div>
		</div>
		</>
	)
}
