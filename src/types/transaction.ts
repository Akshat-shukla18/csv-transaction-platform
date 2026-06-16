export interface Transaction {
  order_id: string;
  product_id: string;
  quantity: number;
  price: number;
  total_amount: number;
  country: string;
  phone: string;
  date: string;
  time: string;
  payment_mode?: string;
}

export interface ValidationError {
  row_number: number;
  order_id: string;
  field_name: string;
  error_message: string;
}

export interface CleaningStats {
  phone_fixed_count: number;
  country_fixed_count: number;
  date_fixed_count: number;
  time_fixed_count: number;
}

