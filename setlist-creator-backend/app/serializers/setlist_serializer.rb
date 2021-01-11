class SetlistSerializer
  include FastJsonapi::ObjectSerializer
  attributes :date, :name, :id
end
