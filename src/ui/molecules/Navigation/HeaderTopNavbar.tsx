import { Suspense } from "react";

import { BrandLogo } from "@/ui/atoms/BrandLogo";
import { SearchInput } from "@/ui/atoms/SearchInput";
import { MainNavigation } from "@/ui/molecules/Navigation/MainNavigation";

export const HeaderTopNavbar = () => {
	return (
		<div className="flex w-full grow items-center justify-evenly">
			<BrandLogo size="3xl" />
			<div className="hidden items-center sm:flex">
				<Suspense>
					<SearchInput variant="desktop" />
				</Suspense>
			</div>
			<Suspense>
				<MainNavigation />
			</Suspense>
		</div>
	);
};
