import { Item } from "../models/Item.js";
import { Order } from "../models/Order.js";
import { Customer } from "../models/Customer.js";
import { User } from "../models/User.js";
export class OrderController {
    static createOrder = async (req, res) => {
        const { customer, orderDetails, tableNumber, waiter } = req.body;
        try {
            const cust = await Customer.findById(customer);
            const wait = await User.findById(waiter);
            if (!cust || !wait) return res.status(404).json({ message: "Customer or Waiter not found" });
            else {
                let billAmt = 0;
                for (let i = 0; i < orderDetails.length; i++) {
                    const item = await Item.findOne({ name: orderDetails[i].item});
                    if(!item) return res.status(404).json({ message: "Item not found"});
                    billAmt += item.price * orderDetails[i].quantity;
                }
                const order = new Order({
                    customer,
                    orderDetails,
                    tableNumber,
                    billAmt: billAmt,
                    waiter
                });
                await order.save();
                res.status(201).json({ message: "Order created successfully", order });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static getOrders = async (req, res) => {
        // console.log(`Order fetched`);
        // res.status(200).json({ message: "Order fetched" })
        try {
            const orders = await Order.find().populate("customer").populate("waiter");
            res.status(200).json({ message: "Orders fetched", orders });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }

    }

    static getOrderById = async (req, res) => {
        // console.log(`Order fetched by id: ${req.params.id}`);
        try {
            const {id} = req.params;
            const order = await Order.findById(id).populate("customer").populate("waiter");
            if(!order) return res.status(404).json({ message: "Order not found"});
            res.status(200).json({ message: "Order fetched", order });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static updateOrder = async (req, res) => {
        const {id} = req.params;
        try {
            const order = await Order.findById(id);
            if(!order) return res.status(404).json({ message: "Order not found"});
            else{
                if(order.orderStatus === "Pending"){
                    order.orderStatus = "Delivered";
                    await order.save();
                    res.status(200).json({ message: "Order updated", order });
                } else if(order.orderStatus === "Delivered"){
                    order.paid = true;
                    await order.save();
                    res.status(200).json({ message: "Order updated", order });
                }
            }
        } catch (error) {
        }
    }

    static deleteOrder = async (req, res) => {
        const {id} = req.params;
        try {
            const order = await Order.findByIdAndDelete(id);
            if(!order) return res.status(404).json({ message: "Order not found"});
            res.status(200).json({ message: "Order deleted", order });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}