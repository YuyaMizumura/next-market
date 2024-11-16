
import { jwtVerify } from "jose";
import { NextResponse } from "next/server";


export async function middleware(request) {

    // const token = await request.headers.get("Authorization")?.split(" ")[1];
    const token = "eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InkubWpmb3hAeW1haWwubmUuanAiLCJleHAiOjE3MzE4MzMxNDV9.lCOTxz3O4PplPU9Y89YvhPnxuVs-2gmv69xBuEfxcfw";

    // トークンがない場合
    if(!token) {
        return NextResponse.json({ message: "トークンがありません" });
    }

    try {

        const secretKey = new TextEncoder().encode("next-market-app-book");
        const decodedJwt = await jwtVerify(token, secretKey);

        return NextResponse.next();

    } catch {

        return NextResponse.json({ message: "トークンが正しくないので、ログインしてください" });

    }
}

export const config = {
    matcher: [
        "/api/item/create",
        "/api/item/update/:path*",
        "/api/item/delete/:path*",
    ],
}