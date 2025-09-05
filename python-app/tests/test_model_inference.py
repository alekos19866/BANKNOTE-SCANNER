import numpy as np
from scanner import model_inference


class DummyModel:
    def predict(self, data):
        return (data.sum(axis=1) > 0.5).astype(int)


def test_model_inference_uses_model_predict():
    data = np.array([[0.2, 0.3], [0.4, 0.4], [0.9, 0.9]])
    model = DummyModel()
    predictions = model_inference(model, data)
    expected = (data.sum(axis=1) > 0.5).astype(int)
    np.testing.assert_array_equal(predictions, expected)
