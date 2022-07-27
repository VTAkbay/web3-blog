import { ethers } from "hardhat";

async function deploy() {
  const Blog = await ethers.getContractFactory("Blog");
  const blog = await Blog.deploy(
    "Web3 Blog",
    "W3BLOG",
    "10000000000000000" // 0.01 MATIC
  );

  await blog.deployed();

  console.log("Blog deployed to:", blog.address);
}

deploy()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
