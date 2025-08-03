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
  @Transform(({ value }) => { const res = parseInt(value); return isNaN(res) ? null : res })
  year: number;
  @IsNumber()
  @Min(0)
  @Max(1000000)
  @IsOptional()
  @Transform(({ value }) => { const res = parseInt(value); return isNaN(res) ? null : res })
  mileage: number;
  @IsLongitude()
  @IsOptional()
  @Transform(({ value }) => { const res = parseFloat(value); return isNaN(res) ? null : res })
  lng: number;
  @IsLatitude()
  @IsOptional()
  @Transform(({ value }) => { const res = parseFloat(value); return isNaN(res) ? null : res })
  lat: number;
}
