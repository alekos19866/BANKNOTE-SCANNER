import numpy as np
from typing import Any


def preprocess(image: np.ndarray) -> np.ndarray:
    """Normalize image pixel values to range [0, 1].

    Parameters
    ----------
    image : np.ndarray
        Raw image with pixel values 0-255.

    Returns
    -------
    np.ndarray
        Normalized image with dtype float32 in [0, 1].
    """
    if image.dtype != np.float32:
        image = image.astype(np.float32)
    return image / 255.0


def model_inference(model: Any, data: np.ndarray) -> np.ndarray:
    """Run prediction using provided model.

    Parameters
    ----------
    model : Any
        Object with a ``predict`` method returning numpy array.
    data : np.ndarray
        Preprocessed data to feed into the model.

    Returns
    -------
    np.ndarray
        Model predictions.
    """
    return model.predict(data)
