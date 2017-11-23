group :red_green_refactor, halt_on_fail: true do
  guard 'rspec', all_after_pass: true, all_on_start: true, cmd: 'rspec' do
    watch(%r{^spec/.+_spec\.rb$})
    watch(%r{^app/(.+)\.rb}) { |m| "spec/#{m[1]}_spec.rb" }
    watch('spec/spec_helper.rb') { 'spec' }
    watch(%r{^spec/support/.+\.rb$}) { 'spec' }
    watch(%r{^app/javascript/([^/]+)/*}) { |m| "spec/features/#{m[1]}_spec.rb" }
  end

  guard 'rubocop' do
    watch(/.+\.rb$/)
    watch(%r{(?:.+/)?\.rubocop\.yml$}) { |m| File.dirname(m[0]) }
  end
end

guard 'annotate' do
  watch('db/schema.rb')
end

guard 'jest', jest_cmd: './node_modules/jest-cli/bin/jest.js' do
  watch(%r{spec/javascript/(.+\.jsx?)$}) { 'spec/javascripts' }
  watch(%r{app/javascript/(.+\.jsx?)$}) { |m| "spec/javascripts/#{m[1]}" }
end
