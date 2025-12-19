export interface CartProduct {
  id: number;
  name: string;
  image: string;
  description?: string;
  price: number;
  quantity: number;
}

export interface CartAddon {
  id: number;
  title: string;
  subtitle: string;
  price: number;
  image: string;
}

export interface CartSummary {
  subTotal: number;
  delivery: number;
  total: number;
}
