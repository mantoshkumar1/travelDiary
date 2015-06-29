package models;

/**
 * Created by Rike on 06.06.2015.
 */
public enum Rating {
    LOVED_IT,
    REALLY_LIKED_IT,
    LIKED_IT,
    DID_NOT_LIKE_IT,
    HATED_IT;

    /*
    * Return a more readable String for Ratings.
    *
    * @return Readable Rating String
    * */
    @Override
    public String toString() {
        switch (this) {
            case LOVED_IT:
                return "Loved It";
            case REALLY_LIKED_IT:
                return "Really Liked It";
            case LIKED_IT:
                return "Liked It";
            case DID_NOT_LIKE_IT:
                return "Didn't Like It";
            case HATED_IT:
                return "Hated It";
            default:
                return "Unknown Rating";
        }
    }
}
