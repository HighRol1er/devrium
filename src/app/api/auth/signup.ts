// import { RegisterUserReqDto, IUser } from '@/types/auth';
// import { PrismaClient } from '@prisma/client';
// import bcrypt from 'bcryptjs';

// const prisma = new PrismaClient();

// export async function signUpAPI({
//   email,
//   password,
//   name,
// }: RegisterUserReqDto): Promise<IUser> {
//   const existedEmail = await prisma.user.findUnique({
//     where: { email },
//   });
//   const hashedPassword: string = await bcrypt.hash(password, 10);

//   if (existedEmail) {
//     throw new Error('user already exist');
//   }

//   const newUser = await prisma.user.create({
//     data: { email, password: hashedPassword, name },
//   });
//   return {
//     id: newUser.id,
//     email: newUser.email,
//     name: newUser.name,
//     image: newUser.image,
//     bio: newUser.bio,
//   } as IUser;
// }
