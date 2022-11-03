const { Schema, model } = require('mongoose');

const weatherSchema = {
  date: {
    type: Schema.Types.Date,
    required: true
  },
  temperature: {
    type: Schema.Types.Number,
    required: true
  },
  pressure: {
    type: Schema.Types.Number,
    required: true
  },
  visibility: {
    type: Schema.Types.Number,
    required: true
  },
  humidity: {
    type: Schema.Types.Number,
    required: true
  },
  wind: {
    direction: {
      type: Schema.Types.String,
      required: true
    },
    deg: {
      type: Schema.Types.Number,
      required: true
    },
    speed: {
      type: Schema.Types.Number,
      required: true
    }
  }
}

const historySchema = new Schema({
  date: {
    type: Schema.Types.Date,
    required: true
  },
  areas: [{
    areaid: {
      type: Schema.Types.Number,
      required: true
    },
    earlymorning: {
      type: weatherSchema,
      default: null
    },
    morning: {
      type: weatherSchema,
      default: null
    },
    afternoon: {
      type: weatherSchema,
      default: null
    },
    night: {
      type: weatherSchema,
      default: null
    }
  }]
})

const Alert = model('History', historySchema)

export default Alert