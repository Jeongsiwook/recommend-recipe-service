from flask import Flask, jsonify, request
import torch
from transformers import PreTrainedTokenizerFast
from transformers import GPT2Config, GPT2LMHeadModel

app = Flask(__name__)


@app.route('/')
def index():
    return 'Hello Flask!'


@app.route('/recipe', methods=['POST'])
def make_recipe():
    # params = request.get_json()
    tokenizer = PreTrainedTokenizerFast.from_pretrained(
        "skt/kogpt2-base-v2", eos_token="</s>")

    pretrained_model_config = GPT2Config.from_pretrained("skt/kogpt2-base-v2")
    model = GPT2LMHeadModel(pretrained_model_config)

    fine_tuned_model_ckpt = torch.load(
        "./models/epoch=3-val_loss=2.19-v1.ckpt", map_location=torch.device("cpu"))
    model.load_state_dict({k.replace("model.", ""): v for k,
                          v in fine_tuned_model_ckpt['state_dict'].items()})

    model.eval()

    input_ids = tokenizer.encode(
        '<unused0>잣국수<unused1><unused2>잣$소면$김치$오이$<unused3>', return_tensors='pt')

    with torch.no_grad():
        generated_ids = model.generate(
            input_ids,
            do_sample=True,
            top_p=float(1.0),
            top_k=int(50),
            min_length=int(50),
            max_length=int(200),
            repetition_penalty=float(1.0),
            no_repeat_ngram_size=int(0),
            temperature=float(1.0),
            pad_token_id=tokenizer.pad_token_id,
            eos_token_id=tokenizer.eos_token_id,
            bos_token_id=tokenizer.bos_token_id,
            use_cache=True
        )
        generated_sentence = tokenizer.decode(generated_ids[0])
    return generated_sentence


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)
