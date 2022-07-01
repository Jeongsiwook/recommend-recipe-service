import axios from "axios";

const recipeAiModel = async ({ title, ingredients }) => {
    const flask_base_URL = "http://localhost:5000";
    return axios //
        .post(`${flask_base_URL}/recipe`, { title, ingredients })
        .then((res) => res.data);
};

/*
require("onnxjs");
require("onnxjs-node");

const assert = require("assert");

//현재 상황: string input 넣으면, unexpected input data type 오류 발생 expected type: tensor int64
async function recipeAiModel(title, ingredients) {
    // return "시금치는 데쳐서 물기를 뺀다. 계란은 완숙으로 삶아서 식힌다. 밥을 지을 때 밥은 찬밥을 사용해도 되고 대파를 넣으면 조금 더 아삭한 걸 맛볼 수 있다. 밥 위에 시금치 비빔밥을 올린다.";
    // Create an ONNX inference session with ONNXRuntime backend.
    const session = new onnx.InferenceSession({ backendHint: "onnxruntime" });

    // path module 적용 예정
    await session.loadModel("./data/KoGPT_recipt.onnx");

    // const result = await session.run("시금치 비빔밥", ["간장", "밥", "계란", "시금치"]);
    // '<unused0>비빔밥<unused1><unused2>콩나물$고추장$간장$상추$밥$계란$<unused3><unused4>', 10, 1000
    const x = ["<unused0><unused1비빔밥><unused2>콩나물$고추장$간장$상추$밥$계란$<unused3><unused4>"];
    const tensorX = new onnx.Tensor(["dfdfdfdfd"], "string");
    const tensorY = new onnx.Tensor([10], "int32");
    const tensorZ = new onnx.Tensor([1000], "int32");
    return session.run([tensorX, tensorY, tensorZ]);
}

//다른 ai 모델 예시 적용, 잘 돌아감
async function recipeAiModel(name, ingredients) {
    // Create an ONNX inference session with ONNXRuntime backend.
    const session = new onnx.InferenceSession({ backendHint: "onnxruntime" });

    // Load an ONNX model. This model takes two tensors of the same size and return their sum.
    await session.loadModel("./src/utils/add.onnx");

    const x = new Float32Array(3 * 4 * 5).fill(1);
    const y = new Float32Array(3 * 4 * 5).fill(2);

    // object 타입
    const tensorX = new onnx.Tensor(x, "float32", [3, 4, 5]);
    const tensorY = new onnx.Tensor(y, "float32", [3, 4, 5]);

    // Run model with Tensor inputs and get the result by output name defined in model.
    const outputMap = await session.run([tensorX, tensorY]);
    const outputData = outputMap.get("sum");

    // Check if result is expected.
    assert.deepEqual(outputData.dims, [3, 4, 5]);
    assert(outputData.data.every((value) => value === 3));
    console.log(`Got an Tensor of size ${outputData.data.length} with all elements being ${outputData.data[0]}`);
}
*/

export { recipeAiModel };
