import mongoose from "mongoose";

export async function connect() {
    try{
        await mongoose.connect('mongodb+srv://aleffrade:r3nWm5pEUsQVuTk0@cluster0.jar5wun.mongodb.net/hero-tickets');
        console.log('Connect database success');
    } catch (error) {
        console.log("Erro de conexão: ", error);
    }
}