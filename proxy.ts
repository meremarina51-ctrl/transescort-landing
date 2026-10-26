import { NextRequest, NextResponse } from "next/server";
import { DEFAULT_LOCALE, hasLocale, LOCALE_COOKIE } from "@/i18n/config";

export function proxy(request: NextRequest) {
    const { pathname } = request.nextUrl;
    const locale = pathname.split("/")[1];

    if (pathname === "/") {
        const rememberedLocale = request.cookies.get(LOCALE_COOKIE)?.value;
        const url = request.nextUrl.clone();
        url.pathname = `/${hasLocale(rememberedLocale) ? rememberedLocale : DEFAULT_LOCALE}`;
        return NextResponse.redirect(url);
    }

    const response = NextResponse.next();
    if (hasLocale(locale)) {
        response.cookies.set(LOCALE_COOKIE, locale, {
            path: "/",
            maxAge: 60 * 60 * 24 * 365,
            sameSite: "lax",
            httpOnly: true,
            secure: request.nextUrl.protocol === "https:",
        });
    }
    return response;
}

export const config = {
    matcher: ["/", "/ru", "/en"],
};
