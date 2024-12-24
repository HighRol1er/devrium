// export interface IUser {
//   id: string;
//   email: string;
//   name: string | null;
//   image: string | null;
//   bio: string | null;
//   // createdAt: Date;
//   // updatedAt: Date;
// }

export interface RegisterUserReqDto {
  name: string;
  email: string;
  password: string;
}

export interface LoginRequestDto {
  email: string;
  password: string;
}

export interface LoginResponseDto {
  uid: string;
  email: string;
  displayName?: string;
  accessToken: string;
}

// Prisma, NextJs 등에서 사용되는 DTO 정의 할 떄 사용
// DTO : Data Transfer Object
import { z } from 'zod';
// zod 스키마 정의
const userSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z
    .string()
    .email('Invalid email address')
    .nonempty('Email is required'),
});

// 위 처럼 스키마를 작성하면 일종의 타입 선언을 한 것이랑 같다.
// 타입을 추론해서 이렇게 가져와 바인딩 하는 방법도 가능하다.
type TUser = z.infer<typeof userSchema>;

// zod를 사용하면 어떻게 구체적으로 검사가 가능한지 지금부터 ㄱㄱ
// if input payload가 있다고 가정
const inputUserPayload = {
  id: 1,
  name: 'joe',
  email: 'tesss@test.com',
  admin: false,
};

userSchema.parse(inputUserPayload); // 유효성 검증

// 문제가 생긴 경우 error 객체가 발생
// .default() <- 기본값 설정 가능
// .record(z.string()) <- 객체 키값의 모든 벨류 값은 string
// .array(z.number()) <- 배열안 모든 값들은 숫자
// const options = z.enum(['a','b','c']) <- 안에있는 값만 enum으로 사용 가능
//
// zod를 사용해서 validation단을 모두 컨트롤 해보기
