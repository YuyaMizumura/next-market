
import { connectDB, NextResponse } from "../../../utils/modules";
import { UserModel } from "../../../utils/schemaModels";

import { SignJWT } from "jose";

export async function POST(req) {

    const reqBody = await req.json();

    try
    {
        await connectDB();
        const savedUserData = await UserModel.findOne({email: reqBody.email});

        if(savedUserData) {

            if(reqBody.password === savedUserData.password)
            {

                const secretKey = new TextEncoder().encode("next-market-app-book");
                const payload = {
                    email: reqBody.email,
                }

                const token = await new SignJWT(payload)
                                        .setProtectedHeader({alg: "HS256"})
                                        .setExpirationTime("1d")
                                        .sign(secretKey);

                return NextResponse.json({ message: "ログインに成功しました。", token: token});

            }
            else
            {
                return NextResponse.json({ message: "ログイン失敗：パスワードが間違っています。" });
            }

        }
        else
        {
            return NextResponse.json({ message: "ログイン失敗：ユーザー登録をしてください。" });
        }

    }
    catch(err)
    {
       return NextResponse.json({ message: "ログイン失敗" });
    }

}