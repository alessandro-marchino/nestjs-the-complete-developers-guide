import { IsDecimal, IsInt, IsString } from 'class-validator';

export class CreateReportDto {
    price: number;
    make: string;
    model: string;
    year: number;
    lng: number;
    lat: number;
    mileage: number;
}
