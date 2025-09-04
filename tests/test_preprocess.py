import numpy as np
from scanner import preprocess

def test_preprocess_normalizes_and_preserves_shape():
    image = np.random.randint(0, 256, size=(28, 28), dtype=np.uint8)
    processed = preprocess(image)
    assert processed.shape == image.shape
    assert processed.dtype == np.float32
    assert processed.min() >= 0.0
    assert processed.max() <= 1.0
