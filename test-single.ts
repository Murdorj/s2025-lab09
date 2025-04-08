import { ImageAnnotatorClient } from "@google-cloud/vision";

const client = new ImageAnnotatorClient();

async function testSingleImage() {
  const fileName = "./images/logo-types-collection.jpg";

  console.log(`Testing single image: ${fileName}`);

  try {
    const [result] = await client.logoDetection(fileName);
    console.log("=== Raw Response ===");
    console.log(JSON.stringify(result.logoAnnotations, null, 2));
  } catch (err: any) {
    console.error("Error:", err.message || err);
  }
}

testSingleImage();
