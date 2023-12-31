import bcrypt from "bcrypt"
import prisma from "@/app/libs/prismadb"
import { NextResponse } from "next/server";

export const POST = async (
    request: Request
) => {
    const body = await request.json();

    const { name, email, password } = body

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
        data: {
            name: name,
            hashedPassword: hashedPassword,
            email: email
        }
    })

    return NextResponse.json(user);
}