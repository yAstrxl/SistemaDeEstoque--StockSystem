USE sk_db;

CREATE TABLE users(
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(100),
  passw VARCHAR(100),
  nome VARCHAR(100),
  sobrenome VARCHAR(100),
  dtaNascimento VARCHAR(50),
  matricula VARCHAR(100),
  cpf CHAR(11) NOT NULL UNIQUE,
  sexo ENUM('Masculino', 'Feminino'),
  email VARCHAR(100),
  telefone VARCHAR(50),
  funcao VARCHAR(50),
  cep VARCHAR(20),
  endereço VARCHAR(100),
  bairro VARCHAR(100),
  cidade VARCHAR(50),
  estado VARCHAR(50),
  numero VARCHAR(10),
  complemento VARCHAR(100),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO users(username, passw, nome, sobrenome,dtaNascimento, matricula, cpf, sexo, email, telefone, funcao, cep, endereço, bairro, cidade, estado, numero, complemento) VALUES
('lucardoso', '1234', 'Luã', 'Cardoso','10/10/2000' ,'232004390', '06587752-58', 'Masculino', 'lucardosoc27@gmail.com', '71 99652365','Estudante', '41254445', 'Rua Humberto Porto', 'São marcos', 'Salvador', 'Bahia', '448', 'ConJ Colinas de Pituaçu');

