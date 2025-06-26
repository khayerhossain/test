const express = require('express');
const cors=require('cors');
const app = express();
require('dotenv').config();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
});


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.r16wyqp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {

    await client.connect();
    const tipDataCollection=client.db('gardernDB').collection('data');
    const userDataCollection=client.db('gardernDB').collection('userData');
    const gardenTipsCollection = client.db('gardernDB').collection('browseTips');
    const exploreGardenersCollection = client.db('gardernDB').collection('gardenersData');
    const trendingTipsCollection = client.db('gardernDB').collection('trendingTips');


    app.post('/users',async(req,res)=>{
      const users=req.body;
      const result=await userDataCollection.insertOne(users);
      res.send(result)
    });

    app.post('/sharedata',async(req,res)=>{
      const data=req.body
      const result=await tipDataCollection.insertOne(data)
      res.send(result)
    });

    app.get('/gardentips',async(req,res)=>{
      const result= await gardenTipsCollection.find().toArray();
      res.send(result)
    });

  app.get('/sharedata', async (req, res) => {
  const result = await tipDataCollection.find().toArray();
  res.send(result);
});

app.delete('/sharedata/:id',async(req,res)=>{
  const id=req.params.id;
  const filter={_id: new ObjectId(id)}
  const result=await tipDataCollection.deleteOne(filter)
  res.send(result);
});

app.get('/gardeners',async(req,res)=>{
  const result=await exploreGardenersCollection.find().toArray();
  res.send(result);
});

app.put('/sharedata/:id',async(req,res)=>{
  const id=req.params.id;
  const filter={_id: new ObjectId(id)};
  const updateddata=req.body;
  const updatedDoc={
    $set:updateddata
  };
  const result=await tipDataCollection.updateOne(filter,updatedDoc);
  res.send(result);
});


app.get('/trendingtipsdata', async(req, res) => {
  const result = await trendingTipsCollection.find().limit(6).toArray();
  res.send(result);
});



    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
  
  }
}
run().catch(console.dir);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

