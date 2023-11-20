import { Command, Option } from 'commander';

const program = new Command();

program
    .name('template-service')
    .description('A template for building out webservices');

program
    //.addOption(new Option('-m, --mongo <url>', 'specify mongo connection url').makeOptionMandatory().env('MONGO_CONNECTION'))
    .addOption(new Option('-p, --port <port>', 'specify service port').default(8080).env('TEMPLATE_SERVICE_PORT'));

program.parse();

const options = program.opts();
    
export { options as default };