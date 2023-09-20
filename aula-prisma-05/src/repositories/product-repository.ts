import { Products } from "@prisma/client";
import prisma from "database/database";


const TABLE_NAME = "products";

async function getProducts() {
  const result = await prisma.products.findMany()
  return result
}

async function getProduct(id: number) {
  const result = await prisma.products.findFirst({
    where: {
      id
    }
  })
  return result
}

async function createProduct(product: Products) {
  return await prisma.products.create({
    data: product
  })
}

const productRepository = {
  getProduct,
  getProducts,
  createProduct
}

export default productRepository;