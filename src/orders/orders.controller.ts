import { Controller, Get, Param } from '@nestjs/common';
import { OrderProduct } from 'src/models/order-product.model';
import { OrderDTO } from 'src/models/order.model';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  getOrders(): Promise<OrderDTO[]> {
    return this.ordersService.getOrders();
  }

  @Get(':OrderID')
  getOrder(@Param('OrderID') orderID): Promise<OrderDTO> {
    return this.ordersService.getOrder(orderID);
  }

  @Get(':OrderID/products')
  getOrderProducts(@Param('OrderID') orderID): Promise<OrderProduct[]> {
    return this.ordersService.getOrderProducts(orderID);
  }

}
