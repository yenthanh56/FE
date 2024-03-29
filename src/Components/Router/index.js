import { HeaderOnly } from "../Layout";
import Home from "../Page/Home/Home";
import Cart from "../Page/Cart/Cart";

// user
import Login from "../Page/auth/Login/Login";
import Register from "../Page/auth/Register/Register";
import Contact from "../Page/Contact/Contact";
import Pay from "../Page/Pay/Pay";

// user ordered

import UserOrdered from "../Page/Cart/UserOrdered/UserOrdered";

// menu header bottom
import Fruit from "../Page/StylecategoryHeader/Fruit/Fruit";
import Meetegg from "../Page/StylecategoryHeader/Meategg/Meategg";
import Salad from "../Page/StylecategoryHeader/Salad/Salad";
import Milk from "../Page/StylecategoryHeader/Milk/Milk";
import Allergic from "../Page/StylecategoryHeader/Allergic/Allergic";
import Rice from "../Page/StylecategoryHeader/Rice/Rice";
import Foody from "../Page/StylecategoryHeader/Foody/Foody";
import Cake from "../Page/StylecategoryHeader/Cake/Cake";
import Mystore from "../Page/StylecategoryHeader/Mystore/Mystore";

// deal hot
import Dealhot from "~/Components/Page/Dealhot/Dealhot";

// Product detail page dealhot
import ProductDetail from "~/Components/Page/ProductDetail/ProductDetail";
import NotPage from "~/Components/Page/NotPage/NotPage";

// product detail page sugguestToday
import MytodayDetail from "~/Components/Page/Detail/MyToDay/MyToDayDetail";
import CancelOrder from "../Page/CancelOrder/CancelOrder";
import Admin from "../Page/Admin/Admin";
import UpDealhot from "../Page/Admin/Page/UpDealhot/UpDealhot";
import UpForYou from "../Page/Admin/Page/UpForYou/UpForYou";
import ListDealHot from "../Page/Admin/Page/UpDealhot/ListDealHot";
import EditDealhot from "../Page/Admin/Page/UpDealhot/EditDealHot";
import ErrorPage from "../Page/Admin/Page/ErrorPage";

export const publicRouters = [
	{ path: "/", component: Home },
	// stylecategory Header
	{ path: "/traicay", component: Fruit },
	{ path: "/thittrung", component: Meetegg },
	{ path: "/raucuqua", component: Salad },
	{ path: "/suabophomai", component: Milk },
	{ path: "/haisan", component: Allergic },
	{ path: "/gaomianlien", component: Rice },
	{ path: "/douongbiaruou", component: Foody },
	{ path: "/banhkeo", component: Cake },
	{ path: "/banhang", component: Mystore },

	// product
	// dealhot page detail
	{ path: "/productdetail/:id", component: ProductDetail },
	{ path: "*", component: NotPage },

	// suggest Todays detail page
	{ path: "/mytodaydetail/:id", component: MytodayDetail },

	// stylecategory Slider

	{ path: "/deal-hot", component: Dealhot },

	// contact
	{ path: "/lienhe", component: Contact, layout: HeaderOnly },

	// user
	{ path: "/giohang", component: Cart, layout: HeaderOnly },
	{ path: "/users/login", component: Login, layout: null },
	{ path: "/users/register", component: Register, layout: null },
	{ path: "/pay", component: Pay, layout: HeaderOnly },

	// why cancel Order
	{ path: "/cancelorder/:id", component: CancelOrder, layout: HeaderOnly },

	// user ordered UserOrdered
	{ path: "/ordered", component: UserOrdered, layout: HeaderOnly },

	// admin
	{
		path: "/admin/thanhngo",
		component: Admin,
		check: ErrorPage,
		// error: ErrorPage,
		layout: HeaderOnly,
	},
	// { path: "/admin/thanhngo", component: Login, layout: HeaderOnly },

	{
		path: "/admin/thanhngo/listdealhot",
		check: ErrorPage,
		component: ListDealHot,
		layout: HeaderOnly,
	},
	{
		path: "/admin/thanhngo/listdealhot/:id",
		component: EditDealhot,
		layout: HeaderOnly,
	},
	// { path: "/admin/thanhngo/updealhot", component: UpDealhot, layout: null },
	{ path: "/admin/thanhngo/upforyou", component: UpForYou, layout: null },
];
