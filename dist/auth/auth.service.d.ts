/// <reference types="mongoose" />
import { ModelType } from '@typegoose/typegoose/lib/types';
import { UserModel } from './auth.model';
import { AuthDto } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly userModel;
    private readonly jwtService;
    constructor(userModel: ModelType<UserModel>, jwtService: JwtService);
    createUser(dto: AuthDto): Promise<import("mongoose").Document>;
    findUser(email: string): Promise<import("@typegoose/typegoose/lib/types").DocumentType<UserModel> | null>;
    validateUser(email: string, password: string): Promise<Pick<UserModel, 'email'>>;
    login(email: string): Promise<{
        access_token: string;
    }>;
}
