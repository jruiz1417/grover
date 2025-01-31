import { UserModel } from "./db";
import { User } from "./generated/graphql";

export async function userResolver({
  email,
}: {
  email: string;
}): Promise<User | null> {
    const user = await UserModel.findOne({where:{email}});
    if (!user) return null;
    return {
      id: user.id.toString(),
      name: `${user.firstName} ${user.lastName}`,
      email: user.email,
      password: user.password,
      mobileNumber: user.mobileNumber
    };

}
