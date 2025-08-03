import { Transform } from 'class-transformer';
import { IsInt, IsLatitude, IsLongitude, IsNumber, IsOptional, IsString, Max, Min } from 'class-validator';

export class GetEstimateDto {
  @IsString()
  @IsOptional()
  make: string;
  @IsString()
  @IsOptional()
  model: string;
  @IsInt()
  @Min(1930)
  @Max(2050)
  @IsOptional()
  @Transform(({ value }) => parseInt(value))
  year: number;
  @IsNumber()
  @Min(0)
  @Max(1000000)
  @IsOptional()
  @Transform(({ value }) => parseInt(value))
  mileage: number;
  @IsLongitude()
  @IsOptional()
  @Transform(({ value }) => parseFloat(value))
  lng: number;
  @IsLatitude()
  @IsOptional()
  @Transform(({ value }) => parseFloat(value))
  lat: number;
}
