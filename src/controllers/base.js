const processResponse = (data) => {
  if (Array.isArray(data) || typeof (data === "object" && data !== null))
    return data;
  if (data !== undefined && data !== null) return { message: data };
  return undefined;
};

export default class BaseController {
  Sucess(res, data) {
    return res.status(200).json(processResponse(data));
  }
  ErrorBadRequest(res, error) {
    return res.status(400).json(processResponse(error));
  }
  InternalError(res, error) {
    return res.status(500).json(processResponse(error));
  }
  NotFound(res, error) {
    return res.status(404).json(processResponse(error));
  }
}
