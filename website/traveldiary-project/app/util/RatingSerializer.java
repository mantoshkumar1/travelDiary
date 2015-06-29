package util;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializerProvider;
import models.Rating;

import java.io.IOException;

/**
 * Created by albert on 27.06.15.
 */
public class RatingSerializer extends JsonSerializer<Rating> {

    @Override
    public void serialize(Rating value, JsonGenerator jgen, SerializerProvider provider) throws IOException, JsonProcessingException {
        jgen.writeStartObject();
        jgen.writeFieldName("value");
        // Actual rating is between 1 and 5
        jgen.writeNumber(value.ordinal() + 1);
        jgen.writeEndObject();
    }
}
