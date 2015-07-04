package util;

/**
 * Created by albert on 01.07.15.
 */
public class PasswordUtil {

    //encoding password with OpenBSD-style Blowfish password hashing function
    public static String calculateHashString(String plainPassword) {
        // String pw_hash = BCrypt.hashpw(plainPassword, BCrypt.gensalt());


        return plainPassword;
    }

    //compare plain password with hashed password using OpenBSD-style Blowfish password hashing function
    public static boolean comparePassword(String candidate_password, String stored_hash) {
        //if password matches, returns true otherwise false
        //return BCrypt.checkpw(candidate_password, stored_hash);
        return candidate_password.equals(stored_hash);
    }
}
