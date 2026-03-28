/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package dao;

import Connection.ConnectionFactory;
import java.sql.PreparedStatement;
import model.CadastroUsuarioModel;
/**
 *
 * @author 232.004836
 */
public class CadastroUsersDAO {
    
    
    public boolean cadastrar(CadastroUsuarioModel user){
        String sql = "TNSERT INTO users" +
                "(username, passw, nome, sobrenome, matricula, cpf, sexo, email, telefone, função, cep, endereço, bairro, cidade, estado, numero, complemento)" +
                "VALUE(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
        try (var con = ConnectionFactory.getConnection()){
            PreparedStatement stmt = con.prepareStatement(sql);
            stmt.setString(1,user.getNome());
            stmt.setString(1,user.getSobrenome());
            stmt.setString(1,user.getCpf());
            stmt.setLong(1,user.getCep());
            stmt.setString(1,user.getEstado());
            stmt.setString(1,user.getBairro());
            stmt.setString(1,user.getCidade());
            stmt.setLong(1,user.getNumero());
            stmt.setString(1,user.getComplemento());
            stmt.setString(1,user.getNomeUsuario());
            stmt.setString(1,user.getSenha());
            stmt.setString(1,user.getFuncao());
            
            stmt.executeUpdate();
            
            return true;
            
        }catch (Exception e){
            e.printStackTrace();
            return false;
        }
    }
}
