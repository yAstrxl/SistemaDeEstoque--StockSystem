/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package controller;

import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.ServletException;
import java.io.IOException;
import model.CadastroUsuarioModel;
import dao.CadastroUsersDAO;

/**
 *
 * @author 232.004836
 */
@WebServlet("/cadastro")
public class CadastroController extends HttpServlet {
    
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
        throws ServletException,IOException {
         
          CadastroUsuarioModel user = new CadastroUsuarioModel();
          
          user.setNome(request.getParameter("nome"));
          user.setSobrenome(request.getParameter("sobrenome"));
          user.setMatricula(request.getParameter("matricula"));
          user.setCpf(request.getParameter("cpf"));
          user.setSexo(request.getParameter("sexo"));
          user.setDtaNascimento(request.getParameter("dtaNascimento"));
          user.setEmail(request.getParameter("email"));
          user.setTelefone(request.getParameter("telefone"));
          user.setNomeUsuario(request.getParameter("users"));
          user.setSenha(request.getParameter("passw"));
          user.setFuncao(request.getParameter("funcao"));
          user.setCep(Long.parseLong(request.getParameter("cep")));
          user.setEndereco(request.getParameter("endereco"));
          user.setNumero(Long.parseLong(request.getParameter("numero")));
          user.setComplemento(request.getParameter("complemento"));
          user.setBairro(request.getParameter("bairro"));
          user.setCidade(request.getParameter("cidade"));
          user.setEstado(request.getParameter("estado"));
        
          CadastroUsersDAO dao = new CadastroUsersDAO();
          
          if(dao.cadastrar(user)){
              response.sendRedirect("pages/dashboard.html");
          }else{
              response.sendRedirect("pages/cadastro.html");
          }
      }
}
