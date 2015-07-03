package util;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;
import models.Rating;

import java.io.IOException;

/**
 * Created by albert on 02.07.15.
 */
public class RatingDeserializer extends JsonDeserializer<Rating> {
    @Override
    public Rating deserialize(JsonParser jp, DeserializationContext ctxt) throws IOException, JsonProcessingException {

        int ordinal = jp.getIntValue();

        return Rating.values()[ordinal - 1];
    }
}
