function status(request, response){
  response.status(200).json({resposta:"tudo ok!"});
}

export default status;